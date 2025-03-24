import type { Meta, StoryObj } from "@storybook/react";
import CloudGeneric from "../CloudGeneric";

const meta: Meta<typeof CloudGeneric> = { title: "GCP/CloudGeneric", component: CloudGeneric };

export default meta;
type Story = StoryObj<typeof CloudGeneric>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
