import type { Meta, StoryObj } from "@storybook/react";
import BlankCanvas from "../BlankCanvas";

const meta: Meta<typeof BlankCanvas> = { title: "unDraw/BlankCanvas", component: BlankCanvas };

export default meta;
type Story = StoryObj<typeof BlankCanvas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
