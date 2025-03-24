import type { Meta, StoryObj } from "@storybook/react";
import AmusementPark from "../AmusementPark";

const meta: Meta<typeof AmusementPark> = { title: "unDraw/AmusementPark", component: AmusementPark };

export default meta;
type Story = StoryObj<typeof AmusementPark>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
