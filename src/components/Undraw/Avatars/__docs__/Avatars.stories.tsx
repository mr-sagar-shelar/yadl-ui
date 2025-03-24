import type { Meta, StoryObj } from "@storybook/react";
import Avatars from "../Avatars";

const meta: Meta<typeof Avatars> = { title: "unDraw/Avatars", component: Avatars };

export default meta;
type Story = StoryObj<typeof Avatars>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
