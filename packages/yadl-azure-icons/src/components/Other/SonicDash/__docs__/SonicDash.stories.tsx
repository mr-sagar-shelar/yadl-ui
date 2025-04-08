import type { Meta, StoryObj } from "@storybook/react";
import SonicDash from "../SonicDash";

const meta: Meta<typeof SonicDash> = { title: "Azure/Other/SonicDash", component: SonicDash };

export default meta;
type Story = StoryObj<typeof SonicDash>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
