import type { Meta, StoryObj } from "@storybook/react";
import Themeisle354 from "../Themeisle354";

const meta: Meta<typeof Themeisle354> = { title: "Themeisle/Themeisle354", component: Themeisle354 };

export default meta;
type Story = StoryObj<typeof Themeisle354>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
