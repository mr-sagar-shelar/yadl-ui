import type { Meta, StoryObj } from "@storybook/react";
import Themeisle215 from "../Themeisle215";

const meta: Meta<typeof Themeisle215> = { title: "Themeisle/Themeisle215", component: Themeisle215 };

export default meta;
type Story = StoryObj<typeof Themeisle215>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
