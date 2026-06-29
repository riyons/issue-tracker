"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema, IssueFormData } from "@/app/validationSchemas";
import { useState, useTransition } from "react";
import { createIssue } from "./actions";

const NewIssueForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit((data) => {
    setServerError(null);
    startTransition(async () => {
      const result = await createIssue(data);
      if (!result.success) {
        setServerError(result.error);
      }
      // On success, the Server Action redirects, so no code runs here.
    });
  });

  return (
    <div className="max-w-xl">
      {serverError && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{serverError}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        <Button disabled={isPending}>
          {isPending ? "Submitting..." : "Submit New Issue"}
        </Button>
      </form>
    </div>
  );
};

export default NewIssueForm;
