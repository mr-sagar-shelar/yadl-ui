import type { Meta, StoryObj } from "@storybook/react";
import Themeisle56 from "../Themeisle56";

const meta: Meta<typeof Themeisle56> = { title: "Themeisle/Themeisle56", component: Themeisle56 };

export default meta;
type Story = StoryObj<typeof Themeisle56>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
