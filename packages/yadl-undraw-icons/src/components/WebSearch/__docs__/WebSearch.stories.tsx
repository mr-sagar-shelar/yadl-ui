import type { Meta, StoryObj } from "@storybook/react";
import WebSearch from "../WebSearch";

const meta: Meta<typeof WebSearch> = { title: "unDraw/WebSearch", component: WebSearch };

export default meta;
type Story = StoryObj<typeof WebSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
