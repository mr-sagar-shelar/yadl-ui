import type { Meta, StoryObj } from "@storybook/react";
import Powershell from "../Powershell";

const meta: Meta<typeof Powershell> = { title: "Azure/General/Powershell", component: Powershell };

export default meta;
type Story = StoryObj<typeof Powershell>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
