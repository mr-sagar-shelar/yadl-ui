import type { Meta, StoryObj } from "@storybook/react";
import Themeisle295 from "../Themeisle295";

const meta: Meta<typeof Themeisle295> = { title: "Themeisle/Themeisle295", component: Themeisle295 };

export default meta;
type Story = StoryObj<typeof Themeisle295>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
