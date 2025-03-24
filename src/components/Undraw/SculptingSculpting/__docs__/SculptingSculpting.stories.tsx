import type { Meta, StoryObj } from "@storybook/react";
import SculptingSculpting from "../SculptingSculpting";

const meta: Meta<typeof SculptingSculpting> = { title: "unDraw/SculptingSculpting", component: SculptingSculpting };

export default meta;
type Story = StoryObj<typeof SculptingSculpting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
