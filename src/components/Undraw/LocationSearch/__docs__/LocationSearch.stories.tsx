import type { Meta, StoryObj } from "@storybook/react";
import LocationSearch from "../LocationSearch";

const meta: Meta<typeof LocationSearch> = { title: "unDraw/LocationSearch", component: LocationSearch };

export default meta;
type Story = StoryObj<typeof LocationSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
