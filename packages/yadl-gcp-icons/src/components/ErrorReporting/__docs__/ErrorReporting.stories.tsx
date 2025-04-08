import type { Meta, StoryObj } from "@storybook/react";
import ErrorReporting from "../ErrorReporting";

const meta: Meta<typeof ErrorReporting> = { title: "GCP/ErrorReporting", component: ErrorReporting };

export default meta;
type Story = StoryObj<typeof ErrorReporting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
