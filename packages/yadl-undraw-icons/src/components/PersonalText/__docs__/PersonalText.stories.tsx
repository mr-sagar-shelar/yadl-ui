import type { Meta, StoryObj } from "@storybook/react";
import PersonalText from "../PersonalText";

const meta: Meta<typeof PersonalText> = { title: "unDraw/PersonalText", component: PersonalText };

export default meta;
type Story = StoryObj<typeof PersonalText>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
