import type { Meta, StoryObj } from "@storybook/react";
import SourceCode from "../SourceCode";

const meta: Meta<typeof SourceCode> = { title: "unDraw/SourceCode", component: SourceCode };

export default meta;
type Story = StoryObj<typeof SourceCode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
