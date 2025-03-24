import type { Meta, StoryObj } from "@storybook/react";
import AutomlNaturalLanguage from "../AutomlNaturalLanguage";

const meta: Meta<typeof AutomlNaturalLanguage> = { title: "GCP/AutomlNaturalLanguage", component: AutomlNaturalLanguage };

export default meta;
type Story = StoryObj<typeof AutomlNaturalLanguage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
