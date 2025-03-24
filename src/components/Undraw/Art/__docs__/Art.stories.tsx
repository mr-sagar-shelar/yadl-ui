import type { Meta, StoryObj } from "@storybook/react";
import Art from "../Art";

const meta: Meta<typeof Art> = { title: "unDraw/Art", component: Art };

export default meta;
type Story = StoryObj<typeof Art>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
