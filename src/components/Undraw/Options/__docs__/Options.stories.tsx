import type { Meta, StoryObj } from "@storybook/react";
import Options from "../Options";

const meta: Meta<typeof Options> = { title: "unDraw/Options", component: Options };

export default meta;
type Story = StoryObj<typeof Options>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
