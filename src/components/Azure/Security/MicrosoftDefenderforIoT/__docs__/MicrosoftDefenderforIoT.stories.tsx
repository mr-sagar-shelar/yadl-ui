import type { Meta, StoryObj } from "@storybook/react";
import MicrosoftDefenderforIoT from "../MicrosoftDefenderforIoT";

const meta: Meta<typeof MicrosoftDefenderforIoT> = { title: "Azure/Security/MicrosoftDefenderforIoT", component: MicrosoftDefenderforIoT };

export default meta;
type Story = StoryObj<typeof MicrosoftDefenderforIoT>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
