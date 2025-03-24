import type { Meta, StoryObj } from "@storybook/react";
import Themeisle371 from "../Themeisle371";

const meta: Meta<typeof Themeisle371> = { title: "Themeisle/Themeisle371", component: Themeisle371 };

export default meta;
type Story = StoryObj<typeof Themeisle371>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
