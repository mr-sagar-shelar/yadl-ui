import type { Meta, StoryObj } from "@storybook/react";
import AutomlTranslation from "../AutomlTranslation";

const meta: Meta<typeof AutomlTranslation> = { title: "GCP/AutomlTranslation", component: AutomlTranslation };

export default meta;
type Story = StoryObj<typeof AutomlTranslation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
