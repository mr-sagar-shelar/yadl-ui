import type { Meta, StoryObj } from "@storybook/react";
import SweetHome from "../SweetHome";

const meta: Meta<typeof SweetHome> = { title: "unDraw/SweetHome", component: SweetHome };

export default meta;
type Story = StoryObj<typeof SweetHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
