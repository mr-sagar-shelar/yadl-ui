import type { Meta, StoryObj } from "@storybook/react";
import SelectHouse from "../SelectHouse";

const meta: Meta<typeof SelectHouse> = { title: "unDraw/SelectHouse", component: SelectHouse };

export default meta;
type Story = StoryObj<typeof SelectHouse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
