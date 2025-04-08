import type { Meta, StoryObj } from "@storybook/react";
import Themeisle313 from "../Themeisle313";

const meta: Meta<typeof Themeisle313> = { title: "Themeisle/Themeisle313", component: Themeisle313 };

export default meta;
type Story = StoryObj<typeof Themeisle313>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
