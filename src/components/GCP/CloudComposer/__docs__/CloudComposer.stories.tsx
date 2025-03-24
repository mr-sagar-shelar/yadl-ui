import type { Meta, StoryObj } from "@storybook/react";
import CloudComposer from "../CloudComposer";

const meta: Meta<typeof CloudComposer> = { title: "GCP/CloudComposer", component: CloudComposer };

export default meta;
type Story = StoryObj<typeof CloudComposer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
