import type { Meta, StoryObj } from "@storybook/react";
import EiffelTower from "../EiffelTower";

const meta: Meta<typeof EiffelTower> = { title: "unDraw/EiffelTower", component: EiffelTower };

export default meta;
type Story = StoryObj<typeof EiffelTower>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
