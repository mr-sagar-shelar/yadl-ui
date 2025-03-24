import type { Meta, StoryObj } from "@storybook/react";
import Barista from "../Barista";

const meta: Meta<typeof Barista> = { title: "unDraw/Barista", component: Barista };

export default meta;
type Story = StoryObj<typeof Barista>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
