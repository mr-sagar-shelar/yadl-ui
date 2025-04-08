import type { Meta, StoryObj } from "@storybook/react";
import AzureRedHatOpenShift from "../AzureRedHatOpenShift";

const meta: Meta<typeof AzureRedHatOpenShift> = { title: "Azure/Containers/AzureRedHatOpenShift", component: AzureRedHatOpenShift };

export default meta;
type Story = StoryObj<typeof AzureRedHatOpenShift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
