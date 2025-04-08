import type { Meta, StoryObj } from "@storybook/react";
import TheSearch from "../TheSearch";

const meta: Meta<typeof TheSearch> = { title: "unDraw/TheSearch", component: TheSearch };

export default meta;
type Story = StoryObj<typeof TheSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
