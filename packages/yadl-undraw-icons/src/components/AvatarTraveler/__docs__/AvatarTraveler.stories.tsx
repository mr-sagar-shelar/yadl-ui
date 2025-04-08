import type { Meta, StoryObj } from "@storybook/react";
import AvatarTraveler from "../AvatarTraveler";

const meta: Meta<typeof AvatarTraveler> = { title: "unDraw/AvatarTraveler", component: AvatarTraveler };

export default meta;
type Story = StoryObj<typeof AvatarTraveler>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
