import type { Meta, StoryObj } from "@storybook/react";
import Astronaut from "../Astronaut";

const meta: Meta<typeof Astronaut> = { title: "unDraw/Astronaut", component: Astronaut };

export default meta;
type Story = StoryObj<typeof Astronaut>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
