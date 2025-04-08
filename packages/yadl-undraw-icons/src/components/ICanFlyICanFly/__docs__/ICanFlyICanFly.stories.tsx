import type { Meta, StoryObj } from "@storybook/react";
import ICanFlyICanFly from "../ICanFlyICanFly";

const meta: Meta<typeof ICanFlyICanFly> = { title: "unDraw/ICanFlyICanFly", component: ICanFlyICanFly };

export default meta;
type Story = StoryObj<typeof ICanFlyICanFly>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
