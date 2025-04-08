import type { Meta, StoryObj } from "@storybook/react";
import AtHome from "../AtHome";

const meta: Meta<typeof AtHome> = { title: "unDraw/AtHome", component: AtHome };

export default meta;
type Story = StoryObj<typeof AtHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
