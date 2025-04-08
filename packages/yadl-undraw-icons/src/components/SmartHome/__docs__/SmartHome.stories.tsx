import type { Meta, StoryObj } from "@storybook/react";
import SmartHome from "../SmartHome";

const meta: Meta<typeof SmartHome> = { title: "unDraw/SmartHome", component: SmartHome };

export default meta;
type Story = StoryObj<typeof SmartHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
