import type { Meta, StoryObj } from "@storybook/react";
import SelectOption from "../SelectOption";

const meta: Meta<typeof SelectOption> = { title: "unDraw/SelectOption", component: SelectOption };

export default meta;
type Story = StoryObj<typeof SelectOption>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
