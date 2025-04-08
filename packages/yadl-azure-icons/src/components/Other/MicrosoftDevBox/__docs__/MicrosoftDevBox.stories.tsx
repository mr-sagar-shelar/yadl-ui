import type { Meta, StoryObj } from "@storybook/react";
import MicrosoftDevBox from "../MicrosoftDevBox";

const meta: Meta<typeof MicrosoftDevBox> = { title: "Azure/Other/MicrosoftDevBox", component: MicrosoftDevBox };

export default meta;
type Story = StoryObj<typeof MicrosoftDevBox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
