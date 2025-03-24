import type { Meta, StoryObj } from "@storybook/react";
import Themeisle475 from "../Themeisle475";

const meta: Meta<typeof Themeisle475> = { title: "Themeisle/Themeisle475", component: Themeisle475 };

export default meta;
type Story = StoryObj<typeof Themeisle475>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
