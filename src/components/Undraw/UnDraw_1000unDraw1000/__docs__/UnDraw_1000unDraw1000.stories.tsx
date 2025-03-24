import type { Meta, StoryObj } from "@storybook/react";
import UnDraw_1000unDraw1000 from "../UnDraw_1000unDraw1000";

const meta: Meta<typeof UnDraw_1000unDraw1000> = { title: "unDraw/UnDraw_1000unDraw1000", component: UnDraw_1000unDraw1000 };

export default meta;
type Story = StoryObj<typeof UnDraw_1000unDraw1000>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
