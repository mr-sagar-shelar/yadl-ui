import type { Meta, StoryObj } from "@storybook/react";
import Themeisle179 from "../Themeisle179";

const meta: Meta<typeof Themeisle179> = { title: "Themeisle/Themeisle179", component: Themeisle179 };

export default meta;
type Story = StoryObj<typeof Themeisle179>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
