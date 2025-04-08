import type { Meta, StoryObj } from "@storybook/react";
import PersonalEmail from "../PersonalEmail";

const meta: Meta<typeof PersonalEmail> = { title: "unDraw/PersonalEmail", component: PersonalEmail };

export default meta;
type Story = StoryObj<typeof PersonalEmail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
