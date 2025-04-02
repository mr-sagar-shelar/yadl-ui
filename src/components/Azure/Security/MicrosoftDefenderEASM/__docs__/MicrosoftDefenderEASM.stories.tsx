import type { Meta, StoryObj } from "@storybook/react";
import MicrosoftDefenderEASM from "../MicrosoftDefenderEASM";

const meta: Meta<typeof MicrosoftDefenderEASM> = { title: "Azure/Security/MicrosoftDefenderEASM", component: MicrosoftDefenderEASM };

export default meta;
type Story = StoryObj<typeof MicrosoftDefenderEASM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
