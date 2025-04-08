import type { Meta, StoryObj } from "@storybook/react";
import Select from "../Select";

const meta: Meta<typeof Select> = { title: "unDraw/Select", component: Select };

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
