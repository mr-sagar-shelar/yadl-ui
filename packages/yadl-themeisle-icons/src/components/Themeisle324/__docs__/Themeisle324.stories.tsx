import type { Meta, StoryObj } from "@storybook/react";
import Themeisle324 from "../Themeisle324";

const meta: Meta<typeof Themeisle324> = { title: "Themeisle/Themeisle324", component: Themeisle324 };

export default meta;
type Story = StoryObj<typeof Themeisle324>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
