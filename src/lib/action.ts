"use server";

export const getFullName = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", formData);

  try {
    return {
      status: "success",
      message: `Welcome ${formData.get("firstName")} ${formData.get(
        "lastName"
      )}`,
    };
  } catch (error) {
    throw error;
  }
};
