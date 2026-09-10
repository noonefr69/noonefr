"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { toast } from "../ui/toast";

const formSchema = z.object({
  username: z.string().min(1, "").max(15, ""),
  message: z.string().min(1, "").max(150, ""),
  human: z.boolean(),
});

export function PostMessage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      message: "",
      human: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // toast.add({
    //   username2: data.username,
    //   description: "Sunday, December 3 at 9:00 AM",
    // });
    console.log(data);
  }

  return (
    <form
      id="guestbookform"
      className="w-full px-"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="username"
                  autoComplete="off"
                  className="w-full flex-1"
                />
              </Field>
            )}
          />
          <Controller
            name="human"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="w-fit" data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  required
                  value={undefined}
                  aria-invalid={fieldState.invalid}
                />
              </Field>
            )}
          />
        </div>
        <div className="grid grid-cols-9 items-center gap-2">
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="col-span-6">
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    placeholder="message"
                    rows={1}
                    className="min-h-2 w-full resize-none flex-1"
                    aria-invalid={fieldState.invalid}
                  />
                </InputGroup>
              </Field>
            )}
          />
          <Button type="submit" form="guestbookform" className="col-span-3">
            Submit
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
