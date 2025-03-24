import type { Meta, StoryObj } from "@storybook/react";
import PersonalNotebook from "../PersonalNotebook";

const meta: Meta<typeof PersonalNotebook> = { title: "unDraw/PersonalNotebook", component: PersonalNotebook };

export default meta;
type Story = StoryObj<typeof PersonalNotebook>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
