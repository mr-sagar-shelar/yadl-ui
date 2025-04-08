import type { Meta, StoryObj } from "@storybook/react";
import Themeisle252 from "../Themeisle252";

const meta: Meta<typeof Themeisle252> = { title: "Themeisle/Themeisle252", component: Themeisle252 };

export default meta;
type Story = StoryObj<typeof Themeisle252>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
