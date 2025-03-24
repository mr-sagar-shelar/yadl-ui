import type { Meta, StoryObj } from "@storybook/react";
import Themeisle176 from "../Themeisle176";

const meta: Meta<typeof Themeisle176> = { title: "Themeisle/Themeisle176", component: Themeisle176 };

export default meta;
type Story = StoryObj<typeof Themeisle176>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
