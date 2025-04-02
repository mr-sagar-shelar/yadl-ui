import type { Meta, StoryObj } from "@storybook/react";
import AzureSustainability from "../AzureSustainability";

const meta: Meta<typeof AzureSustainability> = { title: "Azure/Other/AzureSustainability", component: AzureSustainability };

export default meta;
type Story = StoryObj<typeof AzureSustainability>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
