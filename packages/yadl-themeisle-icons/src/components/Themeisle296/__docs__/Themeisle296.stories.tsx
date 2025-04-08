import type { Meta, StoryObj } from "@storybook/react";
import Themeisle296 from "../Themeisle296";

const meta: Meta<typeof Themeisle296> = { title: "Themeisle/Themeisle296", component: Themeisle296 };

export default meta;
type Story = StoryObj<typeof Themeisle296>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
