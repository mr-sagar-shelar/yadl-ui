import type { Meta, StoryObj } from "@storybook/react";
import MaleAvatar from "../MaleAvatar";

const meta: Meta<typeof MaleAvatar> = { title: "unDraw/MaleAvatar", component: MaleAvatar };

export default meta;
type Story = StoryObj<typeof MaleAvatar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
